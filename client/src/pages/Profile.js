import React from 'react';


const Profile = () => {
  return (
    <div 
    align="center"
    >  
    <div>
        
        <div>
            
            <div>
                
                <div>
                <img 
                style={{"border-radius":"90px"}}
                src="https://i.imgur.com/bDLhJiP.jpg" 
                width="200"  
                alt='/'/>
                </div>
                
                <div>
                    <span>Recent Grad</span>
                    <h5 >Lisa Bellum</h5>
                    <span>Full Stack Software Developer</span>
                    
                    <div >
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    
                    </div>
                    
                     <ul class="social-list">
                        <li><i class="fa fa-facebook"></i></li>
                        <li><i class="fa fa-dribbble"></i></li>
                        <li><i class="fa fa-instagram"></i></li>
                        <li><i class="fa fa-linkedin"></i></li>
                        <li><i class="fa fa-google"></i></li>
                    </ul>
                    
                    <div
                    
                    style={{"justify-content": "space-between"}}
                    >
                        
                        <button
                        style={{"background-color": "#fff", 
                        "color": "#8E24AA",
                        "border":"1px solid #8E24AA",
                        "height":"40px",
                        "width": "100px",
                        "margin": "20px"      
                      }}
                        >
                          Message
                        </button>
                        <button
                        type='button'
                        style={{"background-color": "#8E24AA", 
                        "color": "#FFF",
                        "border":"1px solid #8E24AA",
                        "height":"40px", 
                        "width": "100px",
                        "margin": "20px"
                        }}
                        
                        >Contact
                        </button>
                    </div>
                    
                    
                </div>
                
               
                
                
            </div>

          </div>
        </div>
      </div>
  );
};

export default Profile;