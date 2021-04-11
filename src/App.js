import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  console.log(value);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <section className='section'>
        <h1 className='title'>Loading...</h1>
      </section>
    );
  }

  console.log(data[value]);

  const { company, dates, duties, title } = data[value];

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {data.map((x, index) => {
            return (
              <button className={`job-btn ${index === value && "btn-active"}`} key={index} onClick={() => setValue(index)}>
                {x.company}
              </button>
            );
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>

          {duties.map((x, index) => {
            return (
              <div className='job-desc' key={index}>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{x}</p>
              </div>
            );
          })}
          <button type='button' className='btn'>
            more info
          </button>
        </article>
      </div>
    </section>
  );
}

export default App;
