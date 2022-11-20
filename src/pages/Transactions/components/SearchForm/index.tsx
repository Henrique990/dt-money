import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormContainer } from './styles';

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Buscar transação" />
            <button type="submit">
                <MagnifyingGlass size={24} />
            </button>
        </SearchFormContainer>
    );
}