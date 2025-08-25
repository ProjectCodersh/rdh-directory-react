import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AssociateProfile = () => {
    return (
        <>
            {/* Profile Section */}
            <section className="bg-light pt-5 pb-4">
                <div className="associate-profile">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12} lg={10} xl={8}>

                                {/* Breadcrumbs */}
                                <div className="breadcrumbs mb-3">
                                    <ul className="list-unstyled text-secondary p-0 m-0">
                                        <li>
                                            <a href="/associates/">Associates</a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Profile Row */}
                                <Row className="associate-card-row">
                                    {/* Image */}
                                    <Col xs={12} sm="auto" className="associate-img text-center mb-3 mb-sm-0">
                                        <img
                                            className="rounded"
                                            src="https://associatefiles.blob.core.windows.net/associatephotos/jeff.adam.jpg"
                                            alt="Jeff Adam Profile"
                                            width="200"
                                            height="240"
                                        />
                                        <div className="small text-muted mt-2">An independent licensee of HelmsBriscoe</div>
                                    </Col>

                                    {/* Details */}
                                    <Col xs={12} sm className="associate-details">
                                        <div className="details">
                                            <h1 className="h3">Jeff Adam</h1>
                                            <p className="text-secondary">Senior Director, Global Accounts</p>

                                            {/* CTA for Mobile */}
                                            <div className="d-block d-md-none mb-3">
                                                <Button variant="warning" href="#request-assistance">
                                                    Request Meeting Assistance
                                                </Button>
                                            </div>

                                            <p>
                                                <strong>Email:</strong>{' '}
                                                <a href="mailto:jeff.adam@HelmsBriscoe.com">jeff.adam@HelmsBriscoe.com</a>
                                            </p>
                                            <p>
                                                <strong>Phone:</strong> 516-883-1048
                                            </p>

                                            <div className="mt-3 address">
                                                <p className="mb-1">3 Cove Lane</p>
                                                <p className="mb-1">Port Washington, NY 11050</p>
                                                <p className="mb-1">USA</p>
                                            </div>
                                        </div>

                                        {/* CTA for Desktop */}
                                        <div className="d-none d-md-block mt-3">
                                            <Button variant="warning" href="#request-assistance">
                                                Request Meeting Assistance
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            {/* Bio Section */}
            <section className="pt-4">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} lg={10} xl={8}>
                            <div className="mb-5">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab-bio-English" role="tabpanel">
                                        <p>
                                            Jeff Adam joined HelmsBriscoe in 2002 as Manager, Global Accounts. Based in Long Island, Jeff
                                            has risen to the role of Senior Director, Global Accounts, and has received numerous President’s
                                            Club awards during his time with HelmsBriscoe. With extensive business experience and more than
                                            20 years in hospitality, Jeff has earned the trust and respect of his clients. Using his
                                            knowledge and experience with corporate meetings and events, he strives to bring successful
                                            solutions and significant time-savings to all meeting and event stakeholders.
                                        </p>
                                        <p>
                                            Jeff represents association and corporate client organizations of all sizes, including Fortune
                                            100, specializing in the financial/insurance, legal, and executive placement industries. By
                                            utilizing Jeff as a strategic hotel and venue sourcing partner that provides scalable resources,
                                            clients have saved thousands of dollars annually in M&E spend. Jeff graduated from Bryant
                                            University in Smithfield, Rhode Island, having earned a degree in Business Administration and
                                            Marketing. He holds a Black Belt in Taekwondo, has dogs and horses, and is immensely proud of
                                            his family.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Request Meeting Assistance Section */}
                            <div className="mb-5" id="request-assistance">
                                <div className="rounded-4 p-5 bg-success text-white">
                                    {/* You can insert form or call-to-action content here */}
                                    <h4>Request Meeting Assistance</h4>
                                    <p>Let Jeff assist with your meeting planning needs.</p>
                                    {/* Add form or contact button if needed */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default AssociateProfile;
