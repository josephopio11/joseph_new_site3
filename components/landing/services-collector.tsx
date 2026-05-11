import getUniqueServicePerCategory from "@/actions/service";
import Services from "./services";

export default async function ServicesCollector() {
  const services = await getUniqueServicePerCategory();
  return <Services myServices={services} />;
}
