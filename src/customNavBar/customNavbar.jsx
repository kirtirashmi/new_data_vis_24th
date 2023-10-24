import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CustomNavbar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="BDR"
              id="bdr-dropdown"
              style={{ cmarginRight: "20px" }}
            >
              <div style={{overflowY:"scroll"}}>
                <ul className="list-unstyled">
                  <li>
                    <NavDropdown
                      title="Finance"
                      id="user-dropdown"
                      className="custom-dropdown-title"
                    >
                      <div>
                        <ul className="list-unstyled">
                          <li className="custom-dropdown-item">Company</li>
                          <li className="custom-dropdown-item">Site</li>
                          <li className="custom-dropdown-item">Users</li>
                          <li className="custom-dropdown-item">Users per company</li>
                          <li className="custom-dropdown-item">Site per User</li>
                          <li className="custom-dropdown-item">Object Physical Locations</li>
                          <li className="custom-dropdown-item">Project Groups</li>
                          <li className="custom-dropdown-item">Account</li>
                          <li className="custom-dropdown-item">Account Groups</li>
                          <li className="custom-dropdown-item">Account Type</li>
                          <li className="custom-dropdown-item">Accounting Periods</li>
                          <li className="custom-dropdown-item">Acquisition Accounts</li>
                          <li className="custom-dropdown-item">Authority Classes</li>
                          <li className="custom-dropdown-item">Authority Combinations</li>
                          <li className="custom-dropdown-item">Bank Identifier Codes (BIC)</li>
                          <li className="custom-dropdown-item">Bank Transaction Codes</li>
                          <li className="custom-dropdown-item">Cash Accounts</li>
                          <li className="custom-dropdown-item">Check Cancellation Reasonse</li>
                          <li className="custom-dropdown-item">Check Handling Codes</li>
                          <li className="custom-dropdown-item">Check Templates</li>
                          <li className="custom-dropdown-item">Code Part Values</li>
                          <li className="custom-dropdown-item">Code String Completion</li>
                          <li className="custom-dropdown-item">Combination Rules</li>
                          <li className="custom-dropdown-item">Cost Revenue Elements</li>
                          <li className="custom-dropdown-item">Cost Revenue Element per Code Part Value</li>
                          <li className="custom-dropdown-item">Currency</li>
                          <li className="custom-dropdown-item">Currency Codes</li>
                          <li className="custom-dropdown-item">Currency Rate Types</li>
                          <li className="custom-dropdown-item">Currency Revaluation Basic Data</li>
                          <li className="custom-dropdown-item">Customer Groups</li>
                          <li className="custom-dropdown-item">Customer Invoice Types</li>
                          <li className="custom-dropdown-item">Delivery Types</li>
                          <li className="custom-dropdown-item">Depreciation Calendar</li>
                          <li className="custom-dropdown-item">Depreciation Method</li>
                          <li className="custom-dropdown-item">Document Footer</li>
                          <li className="custom-dropdown-item">Fixed Assets Books</li>
                          <li className="custom-dropdown-item">IBAN Validation Information</li>
                          <li className="custom-dropdown-item">Invoice Payment Authorizers</li>
                          <li className="custom-dropdown-item">Invoice Posting Authorizers</li>
                          <li className="custom-dropdown-item">Invoice Series</li>
                          <li className="custom-dropdown-item">Object Class</li>
                          <li className="custom-dropdown-item">Object Group</li>
                          <li className="custom-dropdown-item">Object Group</li>
                          <li className="custom-dropdown-item">Payment Formats per Company</li>
                          <li className="custom-dropdown-item">Payment Institutes</li>
                          <li className="custom-dropdown-item">Payment Methods</li>
                          <li className="custom-dropdown-item">Payment Term</li>
                          <li className="custom-dropdown-item">Posting Control</li>
                          <li className="custom-dropdown-item">Reminder Templates</li>
                          <li className="custom-dropdown-item">Revaluation Accounts</li>
                          <l className="custom-dropdown-item">Revaluation Posting Code Parts</l>
                          <li className="custom-dropdown-item">Supplier Groups</li>
                          <li className="custom-dropdown-item">Tax Books</li>
                          <li className="custom-dropdown-item">Tax Codes</li>
                          <li className="custom-dropdown-item">Tax Group</li>
                          <li className="custom-dropdown-item">Tax ID Types</li>
                          <li className="custom-dropdown-item">Tax Ledger Parameters</li>
                          <li className="custom-dropdown-item">Tax Template Column Control</li>
                          <li className="custom-dropdown-item">Tax Template Field Control</li>
                          <li className="custom-dropdown-item">Tax Templates</li>
                          <li className="custom-dropdown-item">Transaction Reasons</li>
                          <li className="custom-dropdown-item">User Groups</li>
                          <li className="custom-dropdown-item">User Groups per Period</li>
                          <li className="custom-dropdown-item">User per User Group</li>
                          <li className="custom-dropdown-item">Users Per Authority Class</li>
                          <li className="custom-dropdown-item">Voucher Series per Voucher type</li>
                          <li className="custom-dropdown-item">Voucher Series per Voucher Type-User Group per Voucher Series</li>
                          <li className="custom-dropdown-item">Voucher Type</li>
                          <li className="custom-dropdown-item">Pseudo Codes
                          </li>
                          

                          
                          
                        </ul>
                      </div>
                    </NavDropdown>
                  </li>
                  <li>
                    <NavDropdown
                      title="Human Resource"
                      id="customer-dropdown"
                      className="custom-dropdown-title"
                    >
                      <div>
                        <ul className="list-unstyled">
                          <li className="custom-dropdown-item">Organization Levels</li>
                          <li className="custom-dropdown-item">Property Field Definition</li>
                          <li className="custom-dropdown-item">Employment Types</li>
                          <li className="custom-dropdown-item">Access Attribute(Module Overview)</li>
                          <li className="custom-dropdown-item">Access Role</li>
                          <li className="custom-dropdown-item">Company Details (Work Location)</li>
                          <li className="custom-dropdown-item">Cycle Schedules</li>
                          <li className="custom-dropdown-item">Day Types</li>
                          <li className="custom-dropdown-item">Employee Category</li>
                          <li className="custom-dropdown-item">Employee Free Field Definition</li>
                          <li className="custom-dropdown-item">Employee Payment Methods</li>
                          <li className="custom-dropdown-item">Employee Schedules and Rules</li>
                          <li className="custom-dropdown-item">Employee Status</li>
                          <li className="custom-dropdown-item">Expense Rule</li>
                          <li className="custom-dropdown-item">Flex Day Rule</li>
                          <li className="custom-dropdown-item">Gender Type</li>
                          <li className="custom-dropdown-item">ISO 20022 Configuration</li>
                          <li className="custom-dropdown-item">Job</li>
                          <li className="custom-dropdown-item">Job Grades</li>
                          <li className="custom-dropdown-item">Mileage Limits</li>
                          <li className="custom-dropdown-item">Organization Basic Data- Bank Detail</li>
                          <li className="custom-dropdown-item">Organization IBAN Validation Information</li>
                          <li className="custom-dropdown-item">Organization Units</li>
                          <li className="custom-dropdown-item">Person</li>
                          <li className="custom-dropdown-item">Position Access Setup</li>
                          <li className="custom-dropdown-item">Positions</li>
                          <li className="custom-dropdown-item">Reasons for Leaving</li>
                          <li className="custom-dropdown-item">Request Rejection Reason</li>
                          <li className="custom-dropdown-item">Rounding Rule Definition</li>
                          <li className="custom-dropdown-item">Shift</li>
                          <li className="custom-dropdown-item">Wage Class</li>
                          <li className="custom-dropdown-item">Wage Codes</li>
                          <li className="custom-dropdown-item">Work Location</li>
                          <li className="custom-dropdown-item">Substitute Schedules</li>
                          <li className="custom-dropdown-item">Absence Group</li>
                          
                        </ul>
                      </div>
                    </NavDropdown>
                  </li>
                  <li>
                    <NavDropdown
                      title="Supply Chain Management"
                      id="customer-dropdown"
                      className="custom-dropdown-title"
                    >
                      <div>
                        <ul className="list-unstyled">
                          <li className="custom-dropdown-item">Purchase Groups</li>
                          <li className="custom-dropdown-item">Commodity Groups</li>
                          <li className="custom-dropdown-item">Authorization Routing Templates (Purchase Authorization Basic Data)</li>
                          <li className="custom-dropdown-item">Authorizers (Purchase Authorization Basic Data)</li>
                          <li className="custom-dropdown-item">Buyers</li>
                          <li className="custom-dropdown-item">Cancellation Reasons</li>
                          <li className="custom-dropdown-item">Coordinator Groups</li>
                          <li className="custom-dropdown-item">Coordinators</li>
                          <li className="custom-dropdown-item">Customer Order Type</li>
                          <li className="custom-dropdown-item">Customer Statistic Groups</li>
                          <li className="custom-dropdown-item">Delivery Terms</li>
                          <li className="custom-dropdown-item">Inventory Location Groups</li>
                          <li className="custom-dropdown-item">Inventory Locations</li>
                          <li className="custom-dropdown-item">Part Inspection Code</li>
                          <li className="custom-dropdown-item">Purchase Charge Group</li>
                          <li className="custom-dropdown-item">Purchase Charge Type</li>
                          <li className="custom-dropdown-item">Purchase Milestone/Stage Payment Templates</li>
                          <li className="custom-dropdown-item">Purchase Order Authorization Rule</li>
                          <li className="custom-dropdown-item">Reject Reasons</li>
                          <li className="custom-dropdown-item">Requisitioners</li>
                          <li className="custom-dropdown-item">Ship via codes</li>
                          <li className="custom-dropdown-item">Supplier Statistic Groups</li>
                          <li className="custom-dropdown-item">Autharization Groups</li>
                          <li className="custom-dropdown-item">Unit of Measure</li>
                          
                          
                          
                        </ul>
                      </div>
                    </NavDropdown>
                  </li>
                  <li>
                    <NavDropdown
                      title="Project"
                      id="order-dropdown"
                      className="custom-dropdown-title"
                    >
                      <div>
                        <ul className="list-unstyled">
                          <li className="custom-dropdown-item">Budgeting and Forecasting - Forecast Type</li>
                          <li className="custom-dropdown-item">Cost Element Code Part Demand</li>
                          <li className="custom-dropdown-item">Cost Revenue Breakdown Structure</li>
                          <li className="custom-dropdown-item">Cost Revenue Breakdown Structure Items</li>
                          <li className="custom-dropdown-item">Cost Revenue Breakdown Structure Levels</li>
                          <li className="custom-dropdown-item">Default Manual Connections</li>
                          <li className="custom-dropdown-item">Default Project Roles</li>
                          <li className="custom-dropdown-item">Overhead Criteria</li>
                          <li className="custom-dropdown-item">Overhead Definitions</li>
                          <li className="custom-dropdown-item">Overhead Rules</li>
                          <li className="custom-dropdown-item">Project Budget Control</li>
                          <li className="custom-dropdown-item">Project Category 1</li>
                          <li className="custom-dropdown-item">Project Category 1 per Company</li>
                          <li className="custom-dropdown-item">Project Category 2</li>
                          <li className="custom-dropdown-item">Project Category 2 per Company</li>
                          <li className="custom-dropdown-item">Project Program</li>
                          <li className="custom-dropdown-item">Project Programs per Company</li>
                          <li className="custom-dropdown-item">Project Team</li>
                          <li className="custom-dropdown-item">Report Code Details</li>
                          <li className="custom-dropdown-item">Report Codes</li>
                          <li className="custom-dropdown-item">Resource Category</li>
                          <li className="custom-dropdown-item">Resource Criteria Template</li>
                          <li className="custom-dropdown-item">Resource Groups  & Resource Details</li>
                          <li className="custom-dropdown-item">Sales Charge Type</li>
                          <li className="custom-dropdown-item">Sales Contract Address Type</li>
                          <li className="custom-dropdown-item">Sales Contract Category 1</li>
                          <li className="custom-dropdown-item">Sales Contract Category 2</li>
                          <li className="custom-dropdown-item">Sales Contract Item Type</li>
                          <li className="custom-dropdown-item">Sales Contract Reason Code</li>
                          <li className="custom-dropdown-item">Sales Contract type</li>
                          <li className="custom-dropdown-item">Sales Discount Types</li>
                          <li className="custom-dropdown-item">Sales Groups</li>
                          <li className="custom-dropdown-item">Sales Price Group</li>
                          <li className="custom-dropdown-item">Sales Win and Lose Reasons</li>
                          <li className="custom-dropdown-item">Sales Contract Numbering</li>
                          <li className="custom-dropdown-item">Standard Costs</li>
                          <li className="custom-dropdown-item">Team Members</li>
                          
                        </ul>
                      </div>
                    </NavDropdown>
                  </li>
                </ul>
              </div>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action/3.5"
                className="custom-dropdown-item"
              >
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Information"
              id="basic-nav-dropdown"
              style={{ cmarginRight: "20px" }}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Link"
              id="basic-nav-dropdown"
              style={{ cmarginRight: "20px" }}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
