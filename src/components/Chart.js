import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

 class Chart extends Component {
     constructor(props){
         super(props)
         this.getCity = this.getCity.bind(this);
         this.getPopulation = this.getPopulation.bind(this);
         this.getChartType = this.getChartType.bind(this)
         this.state={
            place: '',
            population: '',
            Bar: '',
            Line: '',
            Pie: '',
            chartType: '',
            unSelected: true,
            ChartData:{
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets:[
                  {
                    label:'Population',
                    data:[
                      617594,
                      181045,
                      153060,
                      106519,
                      105162,
                      95072
                    ],
                    backgroundColor:[
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(255, 159, 64, 0.6)',
                    ]
                  }
                ]
              }
        }
        console.log(this.state)
     }
     
     componentDidMount(){
        this.getCity()
        this.getPopulation()
        
      }
    
    getCity(){
        return this.state.ChartData.labels.map((city)=>{
            return <tr>{city}</tr>
        })
      }
      getPopulation(){
          return this.state.ChartData.datasets[0].data.map((pop)=>{
              return <tr>{pop}</tr>
          })
      }

      submit() {
          const { place, population, ChartData } = this.state;
          const data = {
            labels: [ ...ChartData.labels, place ],
            datasets: [ {
                data: [ ...ChartData.datasets[0].data, population ],
                backgroundColor: [ ...ChartData.datasets[0].backgroundColor, 'rgba(255, 99, 144, 0.6)']
            } ]

          };
          this.setState({
              ChartData: data
            });
      }
      getChartType(e){
    
        this.setState({
            chartType : e.target.value,
            unSelected: false,
        })
      }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-6">
                            <div className='h2 mb-5'>Template Selection Dropdown </div>
                            <div className="col align-self-center">
                                <select id="types" name="types" onChange= {this.getChartType} className="dropdown col-md-6 dropdown-item border border-info m-2">
                                    <option value="none" selected disabled hidden> 
                                    Template Select Dropdown
                                    </option>  
                                    <option value="LINE">LINE</option>
                                    <option value="BAR">BAR</option>
                                    <option value="PIE">PIE</option>     
                            </select>
                            </div>
                            <section>
                            <h1> Enter City Info </h1>
                            <table className="table mt-4">                                        
                                <tbody>
                               
                                    <tr>
                                        <td>
                                            Enter City Name                                        
                                        </td>
                                        <td>
                                            <input type="text" autofocus="autofocus" onChange={(e) => this.setState({ place: e.target.value })} ></input>                                  
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Enter City Population                                         
                                        </td>
                                        <td>
                                            <input type="text" autofocus="autofocus" onChange={(e) => this.setState({ population: e.target.value })} ></input>
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
                        <div style={{ width: "100%", textAlign:"center" }}>
                        <input type="button" value="submit" style={{ width: "40%", textAlign:"center" }} onClick={() => this.submit()} />
                        </div>
                        
                            </section>
                    </div>
                    <div className="col-md-6 mb-4">
                    {this.state.unSelected &&
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/WPWViM-lS-c?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=1" allowfullscreen></iframe>
                        </div>
                    }
                    {this.state.chartType && this.state.chartType === 'BAR' && 
                    <Bar
                    data={this.state.ChartData}
                    options={{
                        title:{
                        display:true,
                        text:'Bar Chart Template',
                        fontSize:25
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}
                />}
                    {this.state.chartType && this.state.chartType === 'LINE' &&
                    <Line data={this.state.ChartData}
                    options={{
                        title:{
                        display:true,
                        text:'Bar Chart Template',
                        fontSize:25
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}/>}
                    {this.state.chartType && this.state.chartType === 'PIE' &&
                    <Pie data={this.state.ChartData}
                    options={{
                        title:{
                        display:true,
                        text:'Bar Chart Template',
                        fontSize:25
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}/>}

                    <table className="table mt-4">
                        <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">City</th>
                                        <th scope="col">Population</th>
                                        </tr>
                        </thead>
                                    
                            <tbody>
                                    <tr>
                                    <td>
                                        {this.getCity()}                                           
                                    </td>
                                    <td>
                                        {this.getPopulation()}
                                    </td>
                                    </tr>
                                        
                            </tbody>
                    </table>
                    </div>
                    <div className="row col-md-10 offset-md-1"> 
                             
                    
                                    
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Chart;
