"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MealsSearchInputs = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParams = new URLSearchParams(searchQuery);
    router.push(`${pathname}?${urlQueryParams}`);
  }, [search]);
  return (
    <input
      type="text"
      placeholder="Search meals..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="mb-6 p-2 border rounded w-full max-w-md"
    />
  );
};

export default MealsSearchInputs;
