import React, {
    Component
} from 'react'

export default class WorkExperience extends Component {
    render() {
        return (
            <section id="section-b">
                <h2>Work Experience</h2>
                <section className="portfolio">

                    <div className="portfolio-item">
                        <img  src={require('../images/morgan_stanley_building_compressed.jpg')} />
                        <div>
                            Morgan Stanley, New York, NY (Contractor) <br />6/2014 – present
                        </div>
                    </div>
                    
                    <div className="portfolio-item">
                        <img  src={require('../images/pexels-photo-887751.jpeg')} />
                        <div>           
                            Door 3 Business Applications Inc., New York, NY (Contractor)<br />
                            3/2014 – 6/2014
                        </div>
                    </div>
                    
                    
                    <div className="portfolio-item">
                        <img  src={require('../images/dsny.jpg')} />
                        <div>
                        Department of Sanitation, New York, NY (Contractor)<br />8/2013 - 1/2014
                        </div>
                    </div>
                    
                    <div className="portfolio-item">
                        <img  src={require('../images/BNY.jpg')} />
                        <div>
                        Bank of New York Mellon, Jersey City, NJ (Contractor)<br />5/2012 - 7/2013
                        </div>
                    </div>
                    
                    <div className="portfolio-item">
                        <img  src={require('../images/brampton.jpg')} />
                        <div>
                        Rogers, Brampton, Ontario (Contractor)<br />8/2010-12/2011
                        </div>
                    </div>
                    
                    <div className="portfolio-item">
                        <img  src={require('../images/pexels-photo-955447.jpeg')} />
                        <div>
                        AMDOCS, Toronto, Ontario (Contractor)<br /> 11/2009-8/2010
                        </div>
                    </div>
                    
                    
                    <div className="portfolio-item">
                        <img  src={require('../images/cibc.jpg')} />
                        <div>
                        CIBC World Market, Toronto, Ontario (Employee)<br />12/2008-5/2009
                        </div>
                    </div>
                    
                    <div className="portfolio-item">
                        <img  src={require('../images/goldman.jpg')} />
                        <div>
                        Goldman Sachs, New York, NY (Contractor)<br /> 11/2007-10/2008
                        </div>
                    </div>
                    
                    <div className="portfolio-item">
                        <img  src={require('../images/citi.jpg')} />
                        <div>
                        Citigroup Corporate & Investment Bank, New York, NY (Contractor) <br />06/2005-09/2007
                        </div>
                    </div>
                    
                    <div className="portfolio-item">
                        <img  src={require('../images/4wfc.jpg')} />
                        <div>
                        Merrill Lynch, New York, NY (Contractor) <br />07/2004-05/2005
                        </div>
                    </div>
                    
                    
                    <div className="portfolio-item">
                        <img  src={require('../images/RBC.jpg')} />
                        <div>
                        RBC Capital Markets, Toronto, Ontario (Employee) <br />05/2001-04/2004
                        </div>
                    </div>
                    
                    <div className="portfolio-item">
                        <img  src={require('../images/laptop-mobile.jpg')} />
                        <div>
                        Nubase Technologies Inc., Toronto, Ontario (Employee) <br />01/2001-04/2001
                        </div>
                    </div>

                    
                    <div className="portfolio-item">
                        <img  src={require('../images/toronto.jpg')} />
                        <div>
                        Blockade System Corporation, Toronto, Ontario (Employee) <br />08/1999-12/2000
                        </div>
                    </div>
                    
                    
                    <div className="portfolio-item">
                        <img  src={require('../images/knight.jpg')} />
                        <div>
                        Knight Securities Inc., Jersey City, NJ (Employee) <br />02/1996-07/1999
                        </div>
                    </div>
                    
                    <div className="portfolio-item">
                        <img  src={require('../images/brass.jpg')} />
                        <div>
                        Automated Securities Clearance Ltd., Weehawken, NJ (Employee) <br />12/1992-01/1996
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}