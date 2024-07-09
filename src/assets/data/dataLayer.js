export const getGroups = async () => {
    try {
        const response = await fetch("https://api.interpol.sd-lab.nl/api/groups");
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getTopThreeGroups = async () => {
    try {
        const response = await fetch("https://api.interpol.sd-lab.nl/api/top-three-groups");
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}