import { languagesData, titleData } from "../../data/languages";
import { Language } from "../../types/Language";

function DataGrid() {
  return (
    <div className="h-screen bg-slate-700">
      <h2 className="text-slate-100 text-3xl uppercase text-center pt-14 px-5">
        Most spoken languages in the world
      </h2>

      {languagesData && titleData && (
        <section className="max-w-6xl mx-auto my-10 px-5">
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  {titleData.map((title: string, index: number) => (
                    <th
                      key={index}
                      className="py-4 px-6 text-left uppercase tracking-wider border-l border-slate-400"
                    >
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {languagesData.map((item: Language) => (
                  <tr
                    key={item.rank}
                    className="even:bg-white odd:bg-gray-200 hover:bg-slate-300"
                  >
                    <td className="td-customized">{item.rank}</td>
                    <td className="td-customized">{item.name}</td>
                    <td className="td-customized">{item.speakers}</td>
                    <td className="td-customized">{item.branch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

export default DataGrid;
