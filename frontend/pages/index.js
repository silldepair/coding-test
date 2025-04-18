import { useState, useEffect } from "react";
import Chip from "./components/chip";
import DealSection from "./components/deal-section";
import ClientSection from "./components/client-section";
import Divider from "./components/divider";
import { Colors } from "../utils/colors";
import ErorPage from "./components/eror-page";
import Loading from "./components/loading";

export default function Home() {
  const [dataSales, setDataSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    getDataSales();
  }, []);

  const getDataSales = async () => {
    setLoading(true);
    setIsError(false);
    fetch("http://localhost:8000/api/data")
      .then((res) => res.json())
      .then((data) => {
        console.log("data:",data);
        setDataSales(data.salesReps || []);
        setLoading(false);
        if(!data?.salesReps){
          setIsError(true);
          setErrorMessage(data?.detail?.message);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setLoading(false);
        setIsError(true);
      });
  }

  const handleAskQuestion = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error("Error in AI request:", error);
    }
  };

  if(isError){
    return(
      <ErorPage title={errorMessage} fontColor={Colors.cyan} callback={getDataSales}/>
    );
  }

  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
      <div style={{ padding: "2rem", fontFamily:"Arial" }}>
        <h1 style={{textAlign:'center'}}>Sales Dashboard</h1>

        <section style={{ marginBottom: "2rem", }}>
          {loading ? (
            <Loading loading={loading} />
          ) : (
            <section>
              {dataSales.map((item) => (
                <section key={item.id}>
                  <section>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                      <div>{item.name}</div>
                      <div>Region : {item.region}</div>
                    </div>
                    <p>
                      {item.role}
                    </p>
                  </section>
                  <section style={{display:'flex', flexDirection:'row',  alignItems:'center'}}>
                    <p>
                      Skill :
                    </p>
                    <section style={{marginLeft:10, display:'flex', flexDirection:'row', flexWrap:'wrap', }}>
                      {item.skills.map((skill, index) => (
                        <Chip isRandomColor={true} borderWidth={2} height={22} isOutline={true} fontColor={Colors.darkgray} key={index} title={skill} />
                      ))}
                    </section>
                  </section>
                  <DealSection items={item.deals} />
                  <ClientSection items={item.clients} />
                  <Divider marginTop={40} marginLeft={0} marginRight={0} marginBottom={20}/>
                </section>
              ))}
            </section>
          )}
        </section>

        <section>
          <h2>Ask a Question (AI Endpoint)</h2>
          <div>
            <input
              type="text"
              placeholder="Enter your question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button onClick={handleAskQuestion}>Ask</button>
          </div>
          {answer && (
            <div style={{ marginTop: "1rem" }}>
              <strong>AI Response:</strong> {answer}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
