import DropInputShowcase from "@/components/showcase/drop-input";
import LongPressButtonShowcase from "@/components/showcase/long-press-buttom";
import MobileDrop from "@/components/showcase/mobile-drop";
import PickerVarients from "@/components/showcase/picker-varients";
import TypeWriterShowcase from "@/components/showcase/type-writer";
import React, { Suspense } from "react";

const routes = [
  {
    path: "picker",
    component: <PickerVarients />,
  },
  {
    path: "type-writer",
    component: <TypeWriterShowcase />,
  },
  {
    path: "drop-input",
    component: <DropInputShowcase />,
  },
  {
    path: "long-press-button",
    component: <LongPressButtonShowcase />,
  },
  {
    path: "mobile-drop",
    component: <MobileDrop />,
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
