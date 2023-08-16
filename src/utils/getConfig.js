const getConfig = () => ({
    
    headers: { Authorization: `Bearer ${localStorage.getItem({..."usuario"})}`}
})

export default getConfig;