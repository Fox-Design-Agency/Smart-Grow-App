/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
	const stageID = params.stageID;

	return { stageID };
};
