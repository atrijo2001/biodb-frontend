const Pagination = ({ drugsPerPage, totaldrugs, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i < Math.ceil(totaldrugs / drugsPerPage); i++) {
		pageNumbers.push(i);
	}
	// console.log(drugPerPage)
	return (
		<nav>
			<ul className='pagination mb-6 pb-5 justify-content-center'>
				<li>1</li>
				{pageNumbers.map((number) => (
					<li key={number} className='page-item'>
						<a onClick={() => paginate(number)} className='page-link text-dark'>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
