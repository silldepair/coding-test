import { useState, useEffect } from "react";
import Chip from "./components/chip";
import DealSection from "./components/deal-section";
import ClientSection from "./components/client-section";
import { Colors } from "../utils/colors";

export default function Home() {
  const [dataSales, setDataSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/api/data")
      .then((res) => res.json())
      .then((data) => {
        console.log("data:",data);
        setDataSales(data.salesReps || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setLoading(false);
      });
  }, []);

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

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Sales Dashboard</h1>

      <section style={{ marginBottom: "2rem" }}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {dataSales.map((item) => (
              <section key={item.id}>
                <section>
                  <h5>
                    name : {item.name}
                  </h5>
                  <h5>
                    role : {item.role}
                  </h5>
                  <h5>
                    region : {item.region}
                  </h5>
                </section>
                <section style={{display:'flex', flexDirection:'row',  alignItems:'center'}}>
                  <h5>
                    Skill :
                  </h5>
                  <section style={{marginLeft:10, display:'flex', flexDirection:'row', flexWrap:'wrap', }}>
                    {item.skills.map((skill, index) => (
                      <Chip isRandomColor={true} fontColor={Colors.darkgray} key={index} title={skill} borderRadius={5} />
                    ))}
                  </section>
                </section>
                <DealSection items={item.deals} />
                <ClientSection items={item.clients} />
              </section>
            ))}
          </ul>
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
  );
}
