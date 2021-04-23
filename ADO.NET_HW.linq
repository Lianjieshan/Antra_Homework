<Query Kind="Statements">
  <Connection>
    <ID>6317c85a-a67f-453c-9967-fefd09f091a7</ID>
    <NamingServiceVersion>2</NamingServiceVersion>
    <Persist>true</Persist>
    <Server>ALIENWARE-R2</Server>
    <DeferDatabasePopulation>true</DeferDatabasePopulation>
    <Database>MinionsDB</Database>
  </Connection>
</Query>

var order = from v in Villains join M in MinionsVillains
			on v.Id equals M.VillainId
			select new{v.Id, v.Name, M.MinionId, M.VillainId};
var order1 = order.GroupBy(x=>x.Name).Select(x=>new {key=x.key, Value=x.Count()}).Tolist();
order1.Dump();

