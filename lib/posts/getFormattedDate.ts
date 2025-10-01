export default function getFormattedDate(dateString: string): string {
  if (!dateString)
    return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(
      new Date("1900-01-01"),
    );

  return new Intl.DateTimeFormat("en-GB", { dateStyle: "full" }).format(
    new Date(dateString),
  );
}
