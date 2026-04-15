"use client";

import { cn } from "@/lib/utils";
import CharacterCount from "@tiptap/extension-character-count";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Bold,
  Code,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Undo,
} from "lucide-react";
import { forwardRef, useEffect, useRef } from "react";

interface RichTextEditorProps {
  className?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
  id?: string;
}

const ToolbarButton = ({
  onClick,
  active,
  disabled,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onMouseDown={(e) => {
      e.preventDefault();
      onClick();
    }}
    disabled={disabled}
    title={title}
    aria-label={title}
    aria-pressed={active}
    className={cn(
      "inline-flex h-7 w-7 items-center justify-center rounded transition-colors",
      "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      "disabled:pointer-events-none disabled:opacity-40",
      active && "bg-accent text-accent-foreground",
    )}
  >
    {children}
  </button>
);

const RichTextEditor = forwardRef<HTMLDivElement, RichTextEditorProps>(
  (
    {
      className,
      name,
      placeholder = "Write something…",
      required,
      maxLength,
      defaultValue,
      value,
      onChange,
      onBlur,
      disabled,
      id,
    },
    ref,
  ) => {
    const hiddenInputRef = useRef<HTMLInputElement>(null);

    const editor = useEditor({
      extensions: [
        StarterKit.configure({
          bulletList: { keepMarks: true },
          orderedList: { keepMarks: true },
        }),
        Placeholder.configure({ placeholder }),
        ...(maxLength ? [CharacterCount.configure({ limit: maxLength })] : []),
      ],
      content: value ?? defaultValue ?? "",
      editable: !disabled,
      editorProps: {
        attributes: {
          role: "textbox",
          "aria-multiline": "true",
          ...(id ? { id } : {}),
          ...(required ? { "aria-required": "true" } : {}),
          class: cn(
            "min-h-full w-full px-4 py-3 text-sm focus:outline-none",
            "prose prose-sm max-w-none",
            "[&_ul]:list-disc [&_ul]:pl-5",
            "[&_ol]:list-decimal [&_ol]:pl-5",
            "[&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:text-muted-foreground",
            "[&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-xs [&_code]:font-mono",
            "[&_pre]:rounded-md [&_pre]:bg-muted [&_pre]:p-3 [&_pre]:text-xs [&_pre]:overflow-x-auto",
            "[&_strong]:font-semibold",
            "[&_p.is-editor-empty:first-child::before]:text-muted-foreground",
            "[&_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]",
            "[&_p.is-editor-empty:first-child::before]:float-left",
            "[&_p.is-editor-empty:first-child::before]:pointer-events-none",
            "[&_p.is-editor-empty:first-child::before]:h-0",
          ),
        },
      },
      onUpdate({ editor }) {
        const html = editor.getHTML();
        const text = editor.getText();
        if (hiddenInputRef.current) {
          hiddenInputRef.current.value = html;
        }
        onChange?.(html);
        // Trigger native validation
        if (required && hiddenInputRef.current) {
          hiddenInputRef.current.setCustomValidity(
            text.trim().length === 0 ? "Please fill in this field." : "",
          );
        }
      },
      onBlur() {
        onBlur?.();
      },
      immediatelyRender: false,
    });

    // Sync external value changes
    useEffect(() => {
      if (!editor || value === undefined) return;
      const current = editor.getHTML();
      if (current !== value) {
        editor.commands.setContent(value);
      }
    }, [editor, value]);

    // Sync disabled state
    useEffect(() => {
      if (!editor) return;
      editor.setEditable(!disabled);
    }, [editor, disabled]);

    const characterCount = editor?.storage?.characterCount?.characters?.() ?? 0;

    return (
      <div
        ref={ref}
        className={cn(
          "border-input bg-background flex flex-col overflow-hidden rounded-lg border",
          "focus-within:ring-ring transition-all focus-within:ring-2 focus-within:ring-offset-0",
          disabled && "cursor-not-allowed opacity-60",
          className,
        )}
      >
        {/* Hidden input for native form submission */}
        {name && (
          <input
            ref={hiddenInputRef}
            type="hidden"
            name={name}
            defaultValue={defaultValue ?? ""}
            required={required}
            aria-hidden="true"
          />
        )}

        {/* Toolbar */}
        <div
          className={cn(
            "border-border flex flex-wrap items-center gap-0.5 border-b px-2 py-1.5",
            "bg-muted/40",
          )}
          aria-label="Text formatting toolbar"
          role="toolbar"
        >
          <ToolbarButton
            title="Bold (⌘B)"
            onClick={() => editor?.chain().focus().toggleBold().run()}
            active={editor?.isActive("bold")}
            disabled={!editor?.can().toggleBold()}
          >
            <Bold size={14} />
          </ToolbarButton>

          <ToolbarButton
            title="Italic (⌘I)"
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            active={editor?.isActive("italic")}
            disabled={!editor?.can().toggleItalic()}
          >
            <Italic size={14} />
          </ToolbarButton>

          <ToolbarButton
            title="Strikethrough"
            onClick={() => editor?.chain().focus().toggleStrike().run()}
            active={editor?.isActive("strike")}
            disabled={!editor?.can().toggleStrike()}
          >
            <Strikethrough size={14} />
          </ToolbarButton>

          <ToolbarButton
            title="Inline code"
            onClick={() => editor?.chain().focus().toggleCode().run()}
            active={editor?.isActive("code")}
            disabled={!editor?.can().toggleCode()}
          >
            <Code size={14} />
          </ToolbarButton>

          <div className="bg-border mx-1 h-4 w-px" aria-hidden="true" />

          <ToolbarButton
            title="Bullet list"
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
            active={editor?.isActive("bulletList")}
          >
            <List size={14} />
          </ToolbarButton>

          <ToolbarButton
            title="Ordered list"
            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
            active={editor?.isActive("orderedList")}
          >
            <ListOrdered size={14} />
          </ToolbarButton>

          <ToolbarButton
            title="Blockquote"
            onClick={() => editor?.chain().focus().toggleBlockquote().run()}
            active={editor?.isActive("blockquote")}
          >
            <Quote size={14} />
          </ToolbarButton>

          <div className="bg-border mx-1 h-4 w-px" aria-hidden="true" />

          <ToolbarButton
            title="Undo (⌘Z)"
            onClick={() => editor?.chain().focus().undo().run()}
            disabled={!editor?.can().undo()}
          >
            <Undo size={14} />
          </ToolbarButton>

          <ToolbarButton
            title="Redo (⌘⇧Z)"
            onClick={() => editor?.chain().focus().redo().run()}
            disabled={!editor?.can().redo()}
          >
            <Redo size={14} />
          </ToolbarButton>

          {maxLength && (
            <span
              className={cn(
                "text-muted-foreground ml-auto text-xs tabular-nums",
                characterCount >= maxLength && "text-destructive font-medium",
              )}
              aria-live="polite"
              // aria-label={`${characterCount} of ${maxLength} characters used`}
            >
              {characterCount}/{maxLength}
            </span>
          )}
        </div>

        {/* Editor area */}
        <div className="flex-1 overflow-y-auto">
          <EditorContent editor={editor} className="h-full" />
        </div>
      </div>
    );
  },
);

RichTextEditor.displayName = "RichTextEditor";

export { RichTextEditor };
export type { RichTextEditorProps };
