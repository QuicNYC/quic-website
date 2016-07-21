/**
 * Created by AngeloZamudio on 7/21/16.
 */
	var staffObj=[
		{
			name:"Ted Brown",
			title: "Executive Director",
			bio: "Professor Brown oversees CISDD, develops relationships with the " +
			"software industry, develops software ideas and applications, facilitates " +
			"CISDD's role in CUNY and determines the mission and goals of the Software Institute. " +
			"As Chair of the Computer Science department at Queens College, he engineered a great " +
			"deal of change, including overseeing an ever-changing curriculum and implementing" +
			" Java as the language for all students to learn. Professor Brown is also on the " +
			"Executive Board of the New York Software Industry Association."
		},
		{
			name: "Hsien-Tseng (Elvin) Wang",
			title: "Manager",
			bio: "Hsien-Tseng (Elvin) Wang is a PhD candidate in Computer Science at the Graduate" +
			" Center, CUNY. His research interest includes semantic web technology, temporal data" +
			" modeling, and knowledge-based systems. He has worked on modeling temporal data with" +
			" RDF model, and developed query language. Wang directs and controls TIQC resources and" +
			" implements policy."
		},
		{
			name: "Haijun (Navy) Su",
			title: "System Administrator",
			bio: "Navy (Haijun) Su has extensive experiences of developing advanced network management" +
			" and web applications. He has rich and broad expertise in object-oriented platform, Middleware," +
			" UNIX systems, software reuse and third-party integration. Navy holds M.S. in Computer Science" +
			" from Queens College, CUNY. Prior to Queens College, he worked as a software engineer in Nortel" +
			" Networks and Ericsson in China for many years. Navy is also familiar with most programming languages," +
			" databases, and operating systems, such as Java, PHP, C++, C, Python, Unix Shell, MySQL, Oracle," +
			" Solaris, Linux, Windows and Mac OS X."
		},
		{
			name: "Shu-Yuan Wu",
			title: "Project Administrator",
			bio: "Shu-Yuan (Sophie) Wu is a PhD candidate in Computer Science at the Graduate Center, CUNY." +
			" Her research interest includes social dynamics, mobile data analysis and simulations. She has" +
			" worked on modeling opinion formation in the Gur Game framework. She had been working on the" +
			" projects simulating transit signal priority in downtown Manhattan using bus health data, using" +
			" taxicab trips data to define the traffic congested areas in NYC, and mobility modeling and" +
			" simulation in an Army project as well."
		}
	];
	$('#myModal').on('hidden.bs.modal', function () {
			console.log("start");
			$('.staff-bio-info').find('h3, h4, p').remove().end();
			console.log("end");
	});

	function showModal0(num) {
		$('.staff-bio-info').append('<h3>'+staffObj[num].name+'</h3>');
		$('.staff-bio-info').append('<h4>'+staffObj[num].title+'</h4>');
		$('.staff-bio-info').append('<p>'+staffObj[num].bio+'</p>');
		$('#myModal').modal('show');
	}





