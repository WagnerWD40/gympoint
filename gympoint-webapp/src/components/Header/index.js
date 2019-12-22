import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Content, NavLink, Profile } from './styles';

import logo from '../../assets/images/logo.png'

import history from '../../services/history';

export default function Header() {
    const profile = useSelector(state => state.user.profile);

    const currentPage = history.location.pathname;

    const dispatch = useDispatch();

    function handleSignOut() {
        dispatch(signOut());
    };

    return (
        <Container>
            <Content>
                <nav>
                    <Link to='/'>
                        <img src={logo} alt='Gympoint' />
                    </Link>
                    <NavLink 
                        to='/management/students' 
                        highlighted={currentPage === '/management/students'}
                    >ALUNOS</NavLink>
                    
                    <NavLink 
                        to='/management/plans'
                        highlighted={currentPage === '/management/plans'}
                    >PLANOS</NavLink>
                    
                    <NavLink 
                        to='/management/registries'
                        highlighted={currentPage === '/management/registries'}
                    >MATRÍCULAS</NavLink>
                    
                    <NavLink 
                        to='/management/help'
                        highlighted={currentPage === '/management/help'}
                    >PEDIDOS DE AUXÍLIO</NavLink>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <button onClick={handleSignOut}>
                                sair do sistema
                            </button> 
                        </div>                    
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
};