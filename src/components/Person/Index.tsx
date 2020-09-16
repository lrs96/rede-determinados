import React from 'react';
import Button from '../Button/Index';


type IPerson = {
    nameImagem: string,
    namePerson: string
}

const Person = (props: IPerson) => {
    return (
        <div className="item_person">
            <img src={require(`../../assets/images/${props.nameImagem}`)} alt={`Se cadastre como ${props.namePerson}`} className="img-fluid" />
            <h3 className="mb-0">
                <span className="d-block">para o</span>
                {props.namePerson}<span>.</span>
            </h3>
            <Button href="javascript:void(0)" classe="btn btn-white mt-4" content="Cadastre-se" id="cadastre-se"/>
        </div>
    )
}


export default Person;