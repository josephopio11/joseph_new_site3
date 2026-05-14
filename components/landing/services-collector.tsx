import getUniqueServicePerCategory from "@/actions/service";
import Services from "./services";

export default async function ServicesCollector() {
  const services = await getUniqueServicePerCategory();
  if (!services) return null;
  if (services.length === 0) return null;
  return <Services services={services} />;
}
