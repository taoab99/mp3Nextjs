import api from "@/src/config/api";
import axios from "axios";
import { cookies } from "next/headers";

export default async function Dashboad() {
  const accessToken = cookies().get("accessToken")?.value;
  const handleData = async () => {
    try {
      // const data: any = await axios.get("http://localhost:3001/users", {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
      // });
      console.log("cad");

      const data: any = await api("http://localhost:3001/users", "GET");
      console.log(data);

      return data.data;
    } catch (error) {
      console.log(error);

      return [];
    }
  };
  let datas: any[] = await handleData();
  // useEffect(() => {
  //   handleData();
  // }, []);
  return (
    <div className="text-center">
      quản lý tài nguyên mp3
      {/* <Button
        text="Get Data"
        className="w-fit border rounded-md bg-purple-primary px-6 py-2"
        onBtn={handleData}
      /> */}
      <data>
        {datas &&
          datas.length > 0 &&
          datas.map((item, index) => {
            return <div key={index}>{item._id + item?.userName}</div>;
          })}
      </data>
    </div>
  );
}
