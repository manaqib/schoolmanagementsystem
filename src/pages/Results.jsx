import ResultTable from '../components/ResultTable'
import { resultsData } from '../data/results'

const Results = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Results</h2>
      </div>

      <div className="panel">
        <ResultTable results={resultsData} />

        
      </div>
    </div>
  )
}

export default Results
