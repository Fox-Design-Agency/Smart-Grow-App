/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
	const groupID = params.groupID;

	return { groupID };
};
