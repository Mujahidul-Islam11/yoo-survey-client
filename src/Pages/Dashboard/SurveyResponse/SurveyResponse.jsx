import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import PieChart from "../../PieChart/PieChart";


const SurveyResponse = () => {
    const axiosSecure = AxiosSecure()
    const {data: votingData=[]} = useQuery({
        queryKey: ['voting'],
        queryFn: async() => { 
            const res = await axiosSecure(`/vote`)
            return res.data
        }
    })
    const yesVote = votingData.filter(item => item.vote === 'Yes')
    const noVote = votingData.filter(item => item.vote === 'No')
    return (
        <div>
            <PieChart yesVote={yesVote} noVote={noVote}></PieChart>
      <h3 className="text-center mt-6 font-bold text-xl uppercase">survey responses</h3>
      <div className="overflow-x-auto mx-10 mt-6">
        <table className="table">
          {/* head */}
          <thead className="bg-blue-300">
            <tr>
              <th>#</th>
              <th>User Email</th>
              <th>User Name</th>
              <th>Category</th>
              <th>Vote</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {votingData?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-semibold">{item.email}</div>
                    </div>
                  </div>
                </td>
                <td>{item.userName}</td>
                <td>{item.category}</td>
                <td>{item.vote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default SurveyResponse;