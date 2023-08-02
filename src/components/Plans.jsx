import check from "../assets/brand/check.svg";

const Plans = () => {
  return (
    <>
      <h2 className="display-6 text-center mb-4">Compare plans</h2>
      <div className="table-responsive">
        <table className="table text-center">
          <thead>
            <tr>
              <th style={{ width: 34 + "%" }}></th>
              <th style={{ width: 22 + "%" }}>Free</th>
              <th style={{ width: 22 + "%" }}>Pro</th>
              <th style={{ width: 22 + "%" }}>Enterprise</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Public
              </th>
              <td>
                <img
                  src={check}
                  alt="check"
                  width={24}
                  height={24}
                  className="bi"
                />
              </td>
              <td>
                <img
                  src={check}
                  alt="check"
                  width={24}
                  height={24}
                  className="bi"
                />
              </td>
              <td>
                <img
                  src={check}
                  alt="check"
                  width={24}
                  height={24}
                  className="bi"
                />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Private
              </th>
              <td></td>
              <td>
                <img
                  src={check}
                  alt="check"
                  width={24}
                  height={24}
                  className="bi"
                />
              </td>
              <td>
                <img
                  src={check}
                  alt="check"
                  width={24}
                  height={24}
                  className="bi"
                />
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th scope="row" className="text-start">
                Permissions
              </th>
              <td>
                <img
                  src={check}
                  alt="check"
                  width={24}
                  height={24}
                  className="bi"
                />
              </td>
              <td>
                <img
                  src={check}
                  alt="check"
                  width={24}
                  height={24}
                  className="bi"
                />
              </td>
              <td>
                <img
                  src={check}
                  alt="check"
                  width={24}
                  height={24}
                  className="bi"
                />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Sharing
              </th>
              <td></td>
              <td>
                <img
                  src={check}
                  alt="check"
                  width={24}
                  height={24}
                  className="bi"
                />
              </td>
              <td>
                <img
                  src={check}
                  alt="check"
                  width={24}
                  height={24}
                  className="bi"
                />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Unlimited members
              </th>
              <td></td>
              <td>
                <img
                  src={check}
                  alt="check"
                  width={24}
                  height={24}
                  className="bi"
                />
              </td>
              <td>
                <img
                  src={check}
                  alt="check"
                  width={24}
                  height={24}
                  className="bi"
                />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Extra security
              </th>
              <td></td>
              <td></td>
              <td>
                <img
                  src={check}
                  alt="check"
                  width={24}
                  height={24}
                  className="bi"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Plans;
