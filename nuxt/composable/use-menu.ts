export default function useMenu({ ctx }: any) {

    const asyncMenu = async ({ ctx }: any) => {
        // console.info('ctx', ctx.root.$wp.menu())
        const menuItems = await ctx.root.$wp.menu()
        return { menuItems }
    }

    return { asyncMenu }
}