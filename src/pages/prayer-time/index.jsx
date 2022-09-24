import axios from "axios";
import React from "react";

const baseURL =
  "https://api.aladhan.com/v1/calendar?latitude=23.890699&longitude=89.109940&method=1&month=9&year=2022";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.data);
    });
  }, []);

  if (!post) return null;

  console.log(post);

  return (
    <div className="container">
      <div className="time topbarpt">
        <table className="table table-bordered table-hover">
          <thead className="border text-center">
            <tr>
              <th scope="col">তারিখ</th>
              <th scope="col">ফজর</th>
              <th scope="col">যোহর</th>
              <th scope="col">আসর</th>
              <th scope="col">মাগরিব</th>
              <th scope="col">এশা</th>
            </tr>
          </thead>
          <tbody className="border">
            {post.map((item) => {
              return (
                <tr>
                  <td scope="row">{item.date.gregorian.date}</td>
                  <td>{item.timings.Fajr}</td>
                  <td>{item.timings.Dhuhr}</td>
                  <td>{item.timings.Asr}</td>
                  <td>{item.timings.Maghrib}</td>
                  <td>{item.timings.Isha}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
