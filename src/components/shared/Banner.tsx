import React from "react";
import { Button } from "../ui/button";

export default function Banner() {
  return (
    <div className="bg-slate-100">
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 items-center  gap-8">
        {/* image */}
        <div>Image</div>
        <div className="space-y-4">
          <h4 className="text-sm font-semibold">Technology</h4>
          <h2 className="text-3xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            obcaecati!
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eaque sequi doloremque dolorem dolorum natus eveniet.
            Harum soluta molestias suscipit <br />
            <br /> sunt nam architecto minus quos delectus repudiandae, corporis
            earum optio! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Incidunt, libero!
          </p>
        <Button variant="default">Read More</Button>
        </div>
      </div>
    </div>
  );
}
