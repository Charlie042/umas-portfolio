import { use } from "react";
import { fetchData } from "../../../components/apiAction";
import PlaygroundComponent from "@/components/playground/playground-component";
export default function PlaygroundPage() {
  const data = use(fetchData());
  return <PlaygroundComponent data={data} />;
}
