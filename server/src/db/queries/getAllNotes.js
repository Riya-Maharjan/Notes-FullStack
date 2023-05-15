export default `
select
    n.id,
    n.note_name,
    n.description
from note n
order by n.id DESC;
`;
