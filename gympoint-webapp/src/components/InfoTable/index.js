import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { 
    Container,
    Subheader,
    Table,
    TableRow,
} from './styles';

import { FaPlus, FaSearch } from 'react-icons/fa';

export default function InfoTable({
    maxSize,
    dataType,
    data,
    dataInfo,
    tableHeader,
    registryButton,
    search,
    editButton,
    editRoute,
    deleteButton,
    handleRegistry,
    handleSearch,
    handleDelete,
}) {

    return (
        <Container maxSize={maxSize}>
            <Subheader>
                <div>
                    <h1>Gerenciando {dataType}</h1>
                </div>
                {(registryButton || search) && (
                    <div>
                        {registryButton && (
                            <button onClick={handleRegistry}>
                                <FaPlus color='#FFF' size={14} />
                                CADASTRAR
                            </button>
                        )}
    
                        {search && (
                            <div>
                                <input
                                    type='text'
                                    placeholder={`Buscar ${dataType}`}
                                    onChange={e => handleSearch(e.target.value)}
                                />
                                <span>
                                    <FaSearch color='#aaa' size={12} />
                                </span>
                            </div>                        
                        )}
                    </div>
                )}

            </Subheader>
            <Table>
                <thead>
                    <tr>
                        {tableHeader.map(header =>
                            <th key={header}>{header}</th>
                        )}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {data.map(item => (
                    <TableRow key={item[dataInfo[0]]}>
                        <td>{item[dataInfo[1]]}</td>
                        <td>{item[dataInfo[2]]}</td>
                        <td>{item[dataInfo[3]]}</td>
                        {item[dataInfo[4]] && (
                            <td>{item[dataInfo[4]]}</td>
                        )}
                        {item[dataInfo[5]] && (
                            <td>{item[dataInfo[5]]}</td>
                        )}
                        {(editButton || deleteButton) && (
                            <td>
                                {editButton && (
                                    <Link
                                        to={{ 
                                            pathname: `/edit/${editRoute}`,
                                            state: { formData: item },
                                        }}
                                    >
                                        <button>editar</button>
                                    </Link>
                                )}
                                {deleteButton && (
                                    <button onClick={() => handleDelete(item)}>
                                        apagar
                                    </button>
                                )}
                            </td>
                        )}
                    </TableRow>
                ))} 
                </tbody>              
            </Table>
        </Container>
    );
};

InfoTable.propTypes = {
    maxSize: PropTypes.string,                  // max size of the container
    dataType: PropTypes.string,                 // name shown above the container
    data: PropTypes.array.isRequired,           // array returned from api -> index
    dataInfo: PropTypes.array.isRequired,       // keys of the data that is shown
    tableHeader: PropTypes.array.isRequired,    // names of the header of the table
    registryButton: PropTypes.bool,             // render the button?
    search: PropTypes.bool,                     // search camp
    editButton: PropTypes.bool,                 // render the button?
    editRoute: PropTypes.string,                // route to edit form
    deleteButton: PropTypes.bool,               // rendet the button?
    handleRegistry: PropTypes.func.isRequired,  
    handleSearch: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};
