import { getClassNameForComponent } from '../../utils/design/designUtils';
import {BootstrapType} from  '../bootstrap/models/BootstrapType'
interface CardComponentProp{
    title: string
    classList?: string[];
    headerClass?: BootstrapType[];
    bodyClass?: BootstrapType[];
}

const CardComponent : React.FC<CardComponentProp> = ({title = "Inserire Titolo", children, classList = [], headerClass=[], bodyClass =[]}) => {
    const listClass = getClassNameForComponent('card', classList);
    const listHeader = getClassNameForComponent('card-header', headerClass); 
    const listBody=  getClassNameForComponent('card-body', bodyClass);
    
 return (
 
 <div className={listClass}>
     
        <div className={listHeader}>{title}</div>
        <div className={listBody}>{children}</div>

 </div>
 )
}

export default CardComponent
