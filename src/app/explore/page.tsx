"use client";

import { Suspense } from "react";
import ExplorePage from "./components/explore-page";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExplorePage />
    </Suspense>
  );
}
