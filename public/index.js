var app = angular.module("ManagerApp", ["ngStorage"]);

app.controller("ManagerController", function($scope, $localStorage) {
	 
	$scope.data = $localStorage.tasks
	$localStorage.tasks = [
	  { taskName: 'Collaboratively administrate empowered markets via plug-and-play networks.',
		created: new Date('July 27, 2015 10:30'),
		time: '30 min',
		deadline: new Date('July 28, 2015 12:00'),
		id: $localStorage.tasks.length
	  },
	  { taskName: 'Dynamically procrastinate B2C users after installed base benefits.',
		created: new Date('July 28, 2015 8:15') ,
		time:  '2 hours',
		deadline: new Date('July 28, 2015 12:00'),
		id: $localStorage.tasks.length
	  },
	  { taskName: 'Dramatically visualize customer directed convergence without revolutionary ROI.',
		created: new Date('July 29, 2015 13:01:41') ,
		time: '45 min',
		deadline: new Date('July 31, 2015 14:30'),
		id: $localStorage.tasks.length
	  },
	  { taskName: 'Efficiently unleash cross-media information without cross-media value.',
		created: new Date('July 31, 2015 14:22:01'),
		time: '3 days',
		deadline: new Date('August 4, 2015 12:00'),
		id: $localStorage.tasks.length
	  },
	  { taskName: 'Dramatically visualize customer directed convergence without revolutionary ROI.',
		created: new Date('August 3, 2015 15:01:41'),
		time: '35 min',
		deadline: new Date('August 4, 2015 15:45'),
		id: $localStorage.tasks.length
	  }

	]

	 
 
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


