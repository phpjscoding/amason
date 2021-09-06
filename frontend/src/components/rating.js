const Rating ={
	render:(props)=>{
		return ` 
          
          <i class="${ props.value>=1
                      ?'fa fa-star'
                      : props.value >= 0.5
                      ?'fa star-half-o'
                      :'fa star-o'  }">

          </i>

           <i class="${ props.value>=2
                      ?'fa fa-star'
                      : props.value >= 1.5
                      ?'fa fa-star-half-o'
                      :'fa fa-star-o'  }">

          </i>

           <i class="${ props.value>=3
                      ?'fa fa-star'
                      : props.value >= 2.5
                      ?'fa fa-star-half-o'
                      :'fa fa-star-o'  }">

          </i>

           <i class="${ props.value>=4
                      ?'fa fa-star'
                      : props.value >= 3.5
                      ?'fa fa-star-half-o'
                      :'fa fa-star-o'  }">

          </i>
           <i class="${ props.value>=5
                      ?'fa fa-star'
                      : props.value >= 4.5
                      ?'fa fa-star-half-o'
                      :'fa fa-star-o'  }">

          </i>

         

        <span class="reviews">${props.numReviews} reviews</span>
		   `

	}
}


export default Rating