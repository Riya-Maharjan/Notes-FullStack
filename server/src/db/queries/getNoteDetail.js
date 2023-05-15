export default `
select
    n.id,
    n.note_name,
    n.description
from note n WHERE n.id=:noteId
order by n.id;
`;
