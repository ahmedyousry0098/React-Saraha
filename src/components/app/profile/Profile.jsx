import React, {useContext} from 'react'
import { AuthContext } from '../../../context/AuthContext'

function Profile() {

    const {state} = useContext(AuthContext)

    return (
        <div class="container text-center py-5 my-5 text-center">
            <div class="card pt-5">
                <a href="" data-toggle="modal" data-target="#profile">
                    <img src="img/avatar.png" className="avatar" alt="" />
                </a>
                <h3 class="py-2">{state.name}</h3>
                <button data-toggle="modal" data-target="#share" class="btn btn-default-outline share "><i class="fas fa-share-alt"></i>  Share Profile</button>
            </div>
        </div>
    )
}

export default Profile