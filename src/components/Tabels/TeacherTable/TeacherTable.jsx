import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function StripedRowExample() {
  return (
    <Table
      striped
      //  responsive="sm"
      //  responsive="md"
      responsive="md"
      //  responsive="xl"
    >
      <thead>
        <tr>
          <th>Full Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Image</th>
          <th>Phone</th>
          <th>....</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <Button variant="info" className="me-1">
              Update
            </Button>
            <Button variant="danger">Delet</Button>
          </td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button variant="info" className="me-1">
              Update
            </Button>
            <Button variant="danger">Delet</Button></td>
        </tr>
        <tr>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button variant="info" className="me-1">
              Update
            </Button>
            <Button variant="danger">Delet</Button></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StripedRowExample;
