import UserController from "../Controllers/UserController";

export default function UsersCard({ update, setUpdate, users }) {


    const createNewAdmin = async (proops) => {
        UserController.createNewAdmin({ 'id':  proops.target.getAttribute('user_id') }).then(data => {
            console.log(data);
            if (data.status === true) {
                setUpdate(!update);
            }
        })
    }

    const deleteUser = async (proops) => {
        UserController.deleteUser({ 'id':  proops.target.getAttribute('user_id') }).then(data => {
            console.log(data);
            if (data.status === true) {
                setUpdate(!update);
            }
        })
    }


    return (
        <>
            {users.map((user) => {
                return (
                    <div key={user.id} style={{ border: '1px black solid', margin: '10px' }}>
                        <div> Name: {user.name} </div>
                        <div> Email: {user.email} </div>
                        <div> Role: {user.role} </div>
                        <button user_id={user.id} onClick={createNewAdmin}>Profile</button>
                        <button user_id={user.id} onClick={createNewAdmin}>Update</button>
                        <button user_id={user.id} onClick={createNewAdmin}>Set admin</button>
                        <button user_id={user.id} onClick={deleteUser}>Delete</button>
                    </div>
                )
            })}
        </>
    )
}