import DropInputShowcase from "@/components/drop-input-showcase";
import PickerVarients from "@/components/picker-varients/picker-varients";
import TypeWriterDemo from "@/components/type-writer-demo";
import React, { Suspense } from "react";

const routes = [
  {
    path: "picker",
    component: <PickerVarients />,
  },
  {
    path: "type-writer",
    component: <TypeWriterDemo />,
  },
  {
    path: "drop-input",
    component: <DropInputShowcase />,
  },
];

export async function generateStaticParams() {
  // Generate static params for all routes
  return routes.map((route) => ({
    comp: route.path,
  }));
}

type Props = {
  params: Promise<{ comp: string }>;
};

const Page = async ({ params }: Props) => {
  const { comp } = await params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {routes.find((route) => route.path === comp)?.component}
    </Suspense>
  );
};

export default Page;
