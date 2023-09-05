import Header from '../components/Header';

export default function Home() {
  return (
    <div className="px-4 py-3"> 
    
    <Header/>      
  <table className="table table-bordered">
    <thead>
	<h1>All Items</h1>
      <tr>
        <th>Pic</th>
        <th>Name</th>
        <th>Description</th>
        <th></th>
		
      </tr>
    </thead>
    <tbody>
    <tr>
        <td><img src='med.png' height={100} width={50}/></td>
        <td>Med</td>
        <td>This is a sample med</td>
        <td><button type="del" className="btn btn-light">delete</button></td>
      </tr>

      <tr>
        <td><img src='med.png' height={100} width={50}/></td>
        <td>Med</td>
        <td>This is a sample med</td>
        <td><button type="del" className="btn btn-light">delete</button></td>
      </tr>

      
      <tr>
        <td><img src='med.png' height={100} width={50}/></td>
        <td>Med</td>
        <td>This is a sample med</td>
        <td><button type="del" className="btn btn-light">delete</button></td>
      
      </tr>
      <tr>
        <td><img src='med.png' height={100} width={50}/></td>
        <td>Med</td>
        <td>This is a sample med</td>
        <td><button type="del" className="btn btn-light">delete</button></td>
      </tr>

    </tbody>
  </table>
</div>
  );
}