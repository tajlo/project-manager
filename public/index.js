var app = angular.module("ManagerApp", ["ngStorage"]);

app.controller("ManagerController", function($scope, $localStorage) {
	 
	$scope.data = $localStorage.tasks

	$localStorage.tasks = [
	  { taskName: 'Collaboratively administrate empowered markets via plug-and-play networks.',
		created: new Date('July 27, 2015 10:30'),
		time: '30 min',
		completed: true,
		deadline: new Date('July 28, 2015 12:00'),
		id: $localStorage.tasks.length
	  },
	  { taskName: 'Dynamically procrastinate B2C users after installed base benefits.',
		created: new Date('July 28, 2015 8:15') ,
		time:  '2 hours',
		completed: true,
		deadline: new Date('July 28, 2015 12:00'),
		id: $localStorage.tasks.length
	  },
	  { taskName: 'Dramatically visualize customer directed convergence without revolutionary ROI.',
		created: new Date('July 29, 2015 13:01:41') ,
		time: '45 min',
		completed: true,
		deadline: new Date('July 31, 2015 14:30'),
		id: $localStorage.tasks.length
	  },
	  { taskName: 'Efficiently unleash cross-media information without cross-media value.',
		created: new Date('July 31, 2015 14:22:01'),
		time: '3 days',
		completed: true,
		deadline: new Date('August 4, 2015 12:00'),
		id: $localStorage.tasks.length
	  },
	  { taskName: 'Dramatically visualize customer directed convergence without revolutionary ROI.',
		created: new Date('August 3, 2015 15:01:41'),
		time: '35 min',
		completed: false,
		deadline: new Date('August 12, 2015 15:45'),
		id: $localStorage.tasks.length
	  }

	]

	$scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 
	 				28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]

	$scope.viewType = 'active' 

	 $scope.deleted = function(idx){
	 	$scope.data = $localStorage.tasks 	
 		idx = $scope.data.length -1 
 		if(idx === $scope.data.length){
 			$scope.data.pop()
 		} 
 		if(idx === 0){
 			$scope.data.shift()
 		}else{
 			$scope.data.splice(idx, 1)
 		}

 		
	   
	    console.log($localStorage.tasks)

	   
		
	 }

	 $scope.save = function(){
		
		 $localStorage.tasks.push({
			taskName:  document.getElementById('task-name').value ,
			created: new Date() ,
			completed: false,
			time: document.getElementById('time').value + " "+ document.getElementById('unit').value,
			deadline: document.getElementById('date').value , 
			id: $localStorage.tasks.length
		})
			console.log($localStorage.tasks)

			$scope.data = $localStorage.tasks 	
	}




})


