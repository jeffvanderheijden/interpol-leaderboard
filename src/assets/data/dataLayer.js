const api = "https://api.interpol.sd-lab.nl/api";

export const getGroups = async () => {
    try {
        const response = await fetch(`${api}/groups`);
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getTopThreeGroups = async () => {
    try {
        const response = await fetch(`${api}/top-three-groups`);
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getGroupById = async (groupId) => {
    try {
        const response = await fetch(`${api}/group?id=${groupId}`);
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};