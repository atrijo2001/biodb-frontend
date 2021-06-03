const Pagination = ({ modelPerPage, biomodels, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i < Math.ceil(biomodels / modelPerPage); i++) {
		pageNumbers.push(i);
	}
	// console.log(drugPerPage)
	return (
		<nav>
			<ul className='pagination mb-5 pb-5 justify-content-center'>
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
