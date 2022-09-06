import axios from "axios";
import { useCallback, useState } from "react";
import { useInterval } from "../utils";
import { NewClock } from "./NewClock";
import { Link } from "react-router-dom";
import { ElClock, HalfCircle, MyWrapper } from "./styledComponents";

const requestUrl = "https://worldtimeapi.org/api/ip";

export const Watch = () => {
  const [date, setDate] = useState<any>("");

  const getData = useCallback(async () => {
    try {
      const response = await axios.get(requestUrl);
      setDate(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } // eslint-disable-next-line
  }, [date]);

  useInterval(() => {
    getData();
  }, 1000);

  const hours = date.datetime?.slice(11, 13);
  const minutes = date.datetime?.slice(14, 16);
  const seconds = date.datetime?.slice(17, 19);

  const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const secondDeg = (seconds / 60) * 360 + 90;

  return (
    <MyWrapper>
      <h1>My Clock</h1>
      <Link to="/circlehalf" style={{ marginBottom: "10px" }}>
        <HalfCircle>Go to HalfCircle</HalfCircle>
      </Link>
      <ElClock>
        {hours && minutes && seconds && `${hours} - ${minutes} - ${seconds}`}{" "}
      </ElClock>

      <div>
        <NewClock
          hourDeg={hourDeg}
          minuteDeg={minuteDeg}
          secondDeg={secondDeg}
        />
      </div>
    </MyWrapper>
  );
};
