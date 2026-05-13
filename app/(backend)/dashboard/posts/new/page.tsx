import EditorShell from "@/components/editor/EditorShell";
import { SiteHeader } from "@/components/site-header";

export default function NewPostPage() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <EditorShell />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
