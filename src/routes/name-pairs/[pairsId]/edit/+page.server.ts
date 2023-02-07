import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
    const session = await event.locals.getSession();

    if (!session?.user) throw redirect(303, `/name-pairs/${event.params.pairsId}`);
    return { user: session.user };
};