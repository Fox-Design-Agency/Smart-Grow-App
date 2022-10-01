/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
	const id = params.id;

	return { id };
};
