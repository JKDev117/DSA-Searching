/* 6. Find the next commanding officer
Suppose you have a tree representing a command structure of the Starship USS Enterprise.

               Captain Picard
             /                \
    Commander Riker       Commander Data
      /         \               \
 Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
 Worf        LaForge            Crusher
   /                           /
Lieutenant                  Lieutenant
security-officer            Selar

This tree is meant to represent who is in charge of lower-ranking officers.
For example, Commander Riker is directly responsible for Worf and LaForge. 
People of the same rank are at the same level in the tree. However, to distinguish 
between people of the same rank, those with more experience are on the left and those 
with less on the right (i.e., experience decreases from left to right). 
Suppose a fierce battle with an enemy ensues. Write a program that will take this tree 
of commanding officers and outlines the ranking officers in their ranking order so that if
officers start dropping like flies, we know who is the next person to take over command.


*/