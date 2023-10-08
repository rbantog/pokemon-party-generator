import { ReactElement } from "react";
import { useSearchParams } from "react-router-dom";
import { sanitizeString } from "../helper/sanitize";

function Grid(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = sanitizeString(searchParams.get("name"));

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-5">
        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
          1
        </div>
        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
          2
        </div>
        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
          3
        </div>
        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
          4
        </div>
        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
          5
        </div>
        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
          6
        </div>
      </div>
    </div>
  );
}
export default Grid;
